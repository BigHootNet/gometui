// src/types/tagify.d.ts
declare module '@yaireo/tagify' {
    interface TagifyChangeEvent extends CustomEvent {
      detail: {
        value: string;
      };
    }
  
    interface TagifyInstance {
      settings: any;
      value: string[];
      on(event: string, callback: (e: TagifyChangeEvent) => void): void;
      off(event: string, callback: (e: TagifyChangeEvent) => void): void;
      // Ajoute d'autres méthodes/propriétés si nécessaire selon la doc de Tagify
    }
  
    const Tagify: {
      new (input: HTMLElement, settings?: any): TagifyInstance;
    };
  }