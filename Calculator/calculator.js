var box=document.getElementById("display");
function append(val)
{
  box.value+=val;
}
function AC()
{
  box.value="";
}
function answer()
{
  try
  {
    box.value=eval(box.value);
  }
  catch(error)
  {
    box.value="ERROR";
  }
}