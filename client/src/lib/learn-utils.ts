import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Path is relative to the project root
const learnDirectory = path.join(process.cwd(), '..', 'content/learn');

export interface LearnModule {
  id: string;
  title: string;
  description: string;
  slug: string;
  lessons: {
    slug: string;
    title: string;
    description: string;
  }[];
}

export async function getLearnModules(): Promise<LearnModule[]> {
  try {
    const moduleDirs = fs.readdirSync(learnDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const modules = await Promise.all(
      moduleDirs.map(async (moduleDir) => {
        const modulePath = path.join(learnDirectory, moduleDir);
        const moduleFiles = fs.readdirSync(modulePath);
        
        // Get module metadata from the first lesson or module.md
        let moduleMeta = { title: moduleDir, description: '' };
        const moduleMdPath = path.join(modulePath, 'module.md');
        
        if (fs.existsSync(moduleMdPath)) {
          const fileContents = fs.readFileSync(moduleMdPath, 'utf8');
          const { data } = matter(fileContents);
          moduleMeta = { ...moduleMeta, ...data };
        }

        // Get all lessons
        const lessons = await Promise.all(
          moduleFiles
            .filter(file => file.endsWith('.mdx') && file !== 'module.md')
            .map(async (file) => {
              const filePath = path.join(modulePath, file);
              const fileContents = fs.readFileSync(filePath, 'utf8');
              const { data } = matter(fileContents);
              
              return {
                slug: file.replace(/\.mdx?$/, ''),
                title: data.title || 'Untitled Lesson',
                description: data.description || '',
              };
            })
        );

        return {
          id: moduleDir,
          slug: moduleDir,
          title: moduleMeta.title,
          description: moduleMeta.description,
          lessons: lessons.sort((a, b) => a.slug.localeCompare(b.slug)),
        };
      })
    );

    return modules.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error('Error loading learn modules:', error);
    return [];
  }
}

export async function getModuleBySlug(slug: string): Promise<LearnModule | null> {
  try {
    const modulePath = path.join(learnDirectory, slug);
    if (!fs.existsSync(modulePath)) return null;

    const moduleFiles = fs.readdirSync(modulePath);
    
    // Get module metadata
    let moduleMeta = { title: slug, description: '' };
    const moduleMdPath = path.join(modulePath, 'module.md');
    
    if (fs.existsSync(moduleMdPath)) {
      const fileContents = fs.readFileSync(moduleMdPath, 'utf8');
      const { data } = matter(fileContents);
      moduleMeta = { ...moduleMeta, ...data };
    }

    // Get all lessons
    const lessons = await Promise.all(
      moduleFiles
        .filter(file => file.endsWith('.mdx') && file !== 'module.md')
        .map(async (file) => {
          const filePath = path.join(modulePath, file);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          
          return {
            slug: file.replace(/\.mdx?$/, ''),
            title: data.title || 'Untitled Lesson',
            description: data.description || '',
            content,
          };
        })
    );

    return {
      id: slug,
      slug,
      title: moduleMeta.title,
      description: moduleMeta.description,
      lessons: lessons.sort((a, b) => a.slug.localeCompare(b.slug)),
    };
  } catch (error) {
    console.error(`Error loading module ${slug}:`, error);
    return null;
  }
}

export async function getLesson(moduleSlug: string, lessonSlug: string) {
  try {
    const lessonPath = path.join(learnDirectory, moduleSlug, `${lessonSlug}.mdx`);
    if (!fs.existsSync(lessonPath)) return null;

    const fileContents = fs.readFileSync(lessonPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: lessonSlug,
      title: data.title || 'Untitled Lesson',
      description: data.description || '',
      content,
      module: {
        slug: moduleSlug,
        title: data.moduleTitle || moduleSlug,
      },
    };
  } catch (error) {
    console.error(`Error loading lesson ${moduleSlug}/${lessonSlug}:`, error);
    return null;
  }
}
