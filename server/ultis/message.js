var generateMessage =(from,text)=>{
  return {
    from,
      text,
      createAt : new Date().getTime()
  };
};
moduel.express ={generateMessage};