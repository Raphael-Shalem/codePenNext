import { TeditorVariant } from './types';

interface IEditorProps {
  variant: TeditorVariant
}
  

const TextEditor: React.FC<IEditorProps> = ({ variant }) => {

    return (
      <textarea className="flex flex-1 border h-full">
      </textarea>
    )
  }
  
  export default TextEditor
  