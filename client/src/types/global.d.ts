declare module '@/components/ui/toaster' {
  import { ComponentType } from 'react';
  
  export interface ToastProps {
    // Add any toast props if needed
  }
  
  export const Toaster: ComponentType<ToastProps>;
  // Add other exports if needed
}

declare module '@/pages/projects' {
  import { ComponentType } from 'react';
  const Projects: ComponentType;
  export default Projects;
}

declare module '@/pages/brands' {
  import { ComponentType } from 'react';
  const Brands: ComponentType;
  export default Brands;
}
