function QuestionArea(props) {
  const question = props.question;
  const op_a = props.op_a;
  const op_b = props.op_b;
  const op_c = props.op_c;
  const op_d = props.op_d;
  const ans = props.ans;
  const exp = props.exp;
  return (
    <>
      {/* Questions Div */}
      <div className="flex flex-col justify-center items-center bg-darkBlue text-gray-300 border-x-2 border-t-2 border-gray-500 rounded-tl-xl rounded-tr-xl mt-3 mr-3 ml-3 p-3">
        <div className="text-lg font-bold leading-loose rounded-md px-4">
          <p>Question</p>
        </div>

        <p>{question}</p>
      </div>
      {/* options div */}
      <div className="bg-softBlue border-x-2 border-b-2 border-gray-500 rounded-bl-xl rounded-br-xl mb-3 mr-3 ml-3 p-3">
        {/* Option A */}
        <div className="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
          <div className="flex">
            <div className="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
              <span className="font-bold">A</span>
            </div>
            <div className="m-3 w-full">{op_a}</div>
          </div>
        </div>

        {/* Option B */}
        <div className="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
          <div className="flex">
            <div className="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
              <span className="font-bold">B</span>
            </div>
            <div className="m-3 w-full">{op_b}</div>
          </div>
        </div>

        {/* Option C */}
        <div className="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
          <div className="flex">
            <div className="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
              <span className="font-bold">C</span>
            </div>
            <div className="m-3 w-full">{op_c}</div>
          </div>
        </div>

        {/* Option D */}
        <div className="flex items-center pl-4 border-2 border-gray-700 rounded-lg mb-3">
          <div className="flex">
            <div className="flex justify-center items-center border-r-2 border-gray-700 w-[40px] p-3">
              <span className="font-bold">D</span>
            </div>
            <div className="m-3 w-full">{op_d}</div>
          </div>
        </div>

        {/* Correct Ans */}
        <div className="flex justify-center w-full h-16 m-2">
          <div className="bg-extremeBlue text-red-500 flex items-center pl-4 rounded-lg min-w-[200px] w-2/6 h-16">
            <div className="flex justify-end  w-3/6 pr-3 font-bold">
              <span>Correct Ans :</span>
            </div>
            <div className="flex justify-start w-3/6 pl-1 font-bold">
              <span className="pl-2">{ans}</span>
            </div>
          </div>
        </div>

        {/* Explaination */}

        <div className="bg-extremeBlue text-gray-300 flex flex-col items-start p-3 rounded-lg w-fit h-auto m-2">
          <div className="m-1">
            <span className="font-bold text-red-500">Explaination :</span>
          </div>
          <div className="m-1">
            <span className="p-2">{exp}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionArea;