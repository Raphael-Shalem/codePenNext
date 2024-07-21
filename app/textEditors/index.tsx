'use client'

import HighLightedCode from './HighLightedCode';
import { TeditorVariant } from '../types';


interface IEditorProps {
  variant: TeditorVariant
}
  

const TextEditor: React.FC<IEditorProps> = ({ variant }) => {

    return (
      <HighLightedCode variant = { variant }/>
       
    )
  }
  
  export default TextEditor
  