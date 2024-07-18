'use client'
import { observer } from 'mobx-react';
import { TeditorVariant } from '../types';
import { useStore } from '../context/rootStore';
import { action } from 'mobx';
import { ChangeEvent } from 'react';

interface IEditorProps {
  variant: TeditorVariant
}
  
const TextEditor: React.FC<IEditorProps> = ({ variant }) => {

    const { sandBoxCode, updateSandBox } = useStore().sandBoxStore;

    const handleChange = action((e: ChangeEvent<HTMLTextAreaElement>) => {

          const userInputObject = { [variant]: e.target.value };
          updateSandBox(userInputObject);
    
        }
    );

    return (
      <textarea 
         className="flex flex-1 border h-full"
         onChange={ (e) => handleChange(e) }
      >
         { sandBoxCode[variant] }
      </textarea>
    )
  }
  
  export default observer(TextEditor)
  