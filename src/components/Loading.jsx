 import {CSSProperties} from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Loading = (props) => {
  return (
    <div className={`w-full h-screen bg-[rgba(0,0,0,0.5)] absolute place-content-center place-items-center ${props.loading ? ` flex`: ` hidden`} `}>
        <ClipLoader
        color={"red"}
        loading={true}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
  )
}

export default Loading