declare module '@yaireo/tagify' {
    import { Component } from 'react';
  
    export default class Tagify extends Component<any, any> {
      settings: any;
      value: string;
      onChange: (e: any) => void;
      inputProps: any;
    }
  }