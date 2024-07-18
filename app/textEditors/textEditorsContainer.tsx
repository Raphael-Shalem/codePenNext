import { editorVariants } from "../myConstants"
import Editor from "./textEditorUnit"

const TextEditorsContainer = () => {

    return (
      <div className="w-screen h-1/2 flex flex-col bg-slate-900">
          <div className="flex flex-1 min-w-full overflow-hidden">  
            {
              editorVariants.map((val) => {
                return(
                  <Editor
                    key = { val }
                    variant = { val }
                  />
                )
              })
            }
          </div>
      </div>
    )
  }
  
  export default TextEditorsContainer
  