let myLeads=[]
const inputEl = document.getElementById('input-el')
const inputBtn=document.getElementById('save-el')
const ulEl = document.getElementById('ul-el')
inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    renderLead()
})

function renderLead(){

    let listItems = ''
    for(let i=0;i<myLeads.length;i++){
        
        // lets use template strings to simplify the code above.
        listItems+=`
        <li>
            <a  target="_blank" href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>`
        
        // ulEl.innerHTML+= "<li>"+myLeads[i]+"</li>"
        // Another way to do the above
        // create a Element
        // set textContent
        // append the element
    
        // const li=document.createElement('li')
        // li.textContent=myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML=listItems
}