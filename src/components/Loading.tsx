const Loading = () => {
  return (
      <div className="flex flex-col justify-center h-full w-full bg-white rounded-lg animate-pulse">
        <div className="mx-auto w-32 h-32 mb-4 rounded-full bg-slate-300"></div>
        <div className="w-[26rem] mx-auto h-8 rounded-md mb-4 bg-slate-300"></div>
        <div className="w-[20rem] ml-4 h-8 rounded-md mb-4 bg-slate-300"></div>
        <div className="w-[16rem] ml-4 h-8 rounded-md mb-4 bg-slate-300"></div>
        <div className="w-[16rem] ml-4 h-8 rounded-md mb-4 bg-slate-300"></div>
        <div className="w-[26rem] mx-auto h-8 rounded-md bg-slate-300"></div>
      </div>
  );
};

export default Loading;
