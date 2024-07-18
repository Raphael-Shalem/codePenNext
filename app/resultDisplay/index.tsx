
'use client'
import { useStore } from '../context/rootStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { useMemo } from 'react';

  
  interface IResultDisplayProps {
  }
  
  const ResultDisplay: React.FC<IResultDisplayProps> = () => {

    const { sandBoxCode } = useStore().sandBoxStore;
    const codeObject = toJS(sandBoxCode);


    const srcDoc = useMemo(() => {
      return`<html>
              <body>
                <style>
                  ${ codeObject.css }
                </style>
                  ${ codeObject.html }
                <script>
                  ${ codeObject.js }
                </script>
              </body>
            </html>`
    },[codeObject])
      
  
    return (
      <div className="w-screen flex flex-1 items-center justify-center">
        <iframe
            title           = 'codePenCopy'
            width           = '100%'
            height          = '100%'
            srcDoc          = { srcDoc }
            sandbox         = 'allow-scripts'
            allowFullScreen = { false }
        />
      </div>
  
    );
  }
  
  
  export default observer(ResultDisplay)






