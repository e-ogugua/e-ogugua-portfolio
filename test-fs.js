import fs from 'fs';
import path from 'path';

async function testFileSystem() {
  try {
    console.log('Current working directory:', process.cwd());
    
    // Test content directory
    const contentDir = path.join(process.cwd(), 'content/blog');
    console.log('Content directory path:', contentDir);
    console.log('Directory exists:', fs.existsSync(contentDir));
    
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);
      console.log('Files in content directory:', files.slice(0, 5), '...');
      
      // Test reading a file
      if (files.length > 0) {
        const testFile = path.join(contentDir, files[0]);
        console.log('Test file path:', testFile);
        console.log('File exists:', fs.existsSync(testFile));
        
        if (fs.existsSync(testFile)) {
          const content = fs.readFileSync(testFile, 'utf8');
          console.log('File content preview:', content.substring(0, 100) + '...');
        }
      }
    }
  } catch (error) {
    console.error('Error during filesystem test:', error);
  }
}

testFileSystem();
