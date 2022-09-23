import './style.css'





const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes)

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if (e.shiftKey && this.checked){
    console.log("there's shift")
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if(checkbox === this || checkbox === lastChecked){
      inBetween = !inBetween;
      console.log('starting to check them inbetween')
      }
      if(inBetween){
        checkbox.checked = true;
      }
    
     }
     )
  }
  lastChecked = this;
  console.log(e)
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
