const FeedbackOptions = ({ options, addCount }) => {
  const optionsKeys = [...Object.keys(options)];

  return (
    <div>
      {optionsKeys.map(key => {
        return (
          <button key={key} type="button" onClick={addCount} name={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
