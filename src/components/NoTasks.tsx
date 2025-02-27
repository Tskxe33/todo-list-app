const NoTasks = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 mt-16">
      <p className="text-grey-dark text-xl md:text-4xl text-center">
        You don't have any tasks yet.
      </p>
      <p className="text-grey-dark text-base md:text-xl text-center">
        Tap on the blue button to create a new task.
      </p>
    </div>
  );
};

export default NoTasks;
