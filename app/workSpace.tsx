import TextEditors from './textEditors/textEditorsContainer'
import ResultDisplay from './resultDisplay'


const WorksSpace = () => {

  return (
      <div className="absolute top-0 left-0 flex flex-col w-full h-full">
        <TextEditors/>
        <ResultDisplay/>
      </div>
  )
}

export default WorksSpace
