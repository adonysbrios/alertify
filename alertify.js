
let alertify;
let notifications;
let id = 0;

function initAlertify() {
  alertify = document.getElementById("alertify");
  notifications = document.getElementById('alertify-notification')
}

function closeAlert(){
    alertify.style.display = 'none'
}

function fireAlert({ title, info, options }){
  let card = document.getElementsByClassName("alertify-card")[0];
  alertify.style.display = 'flex'
  card.innerHTML=''
  const content_ = document.createElement('div')
  const head_ = document.createElement('h1');
  const text_ = document.createElement('p');
  const options_ = document.createElement('div');
  const icon_ = document.createElement('div')
  icon_.className='icon'
  icon_.innerHTML='<?xml version="1.0" encoding="utf-8"?><svg width="232" height="232" viewBox="0 0 232 232" xmlns="http://www.w3.org/2000/svg"><g><rect width="232" height="232" /><path id="Shape" d="M106.72 0C47.7781 0 0 47.7781 0 106.72C0 165.662 47.7781 213.44 106.72 213.44C165.662 213.44 213.44 165.662 213.44 106.72C213.44 47.7781 165.662 0 106.72 0C106.72 0 106.72 0 106.72 0ZM106.72 41.76C114.408 41.76 120.64 47.9915 120.64 55.68C120.64 63.3685 114.408 69.6 106.72 69.6C99.0315 69.6 92.8 63.3685 92.8 55.68C92.8 47.9915 99.0315 41.76 106.72 41.76C106.72 41.76 106.72 41.76 106.72 41.76ZM125.28 167.04L116 167.04L97.44 167.04L88.16 167.04L88.16 157.76L97.44 157.76L97.44 97.44L88.16 97.44L88.16 88.16L97.44 88.16L116 88.16L116 97.44L116 157.76L125.28 157.76L125.28 167.04L125.28 167.04Z" fill="#000000" transform="translate(9.28 9.28)" /></g></svg>'
  options_.className='options'
  head_.innerText=title+":";
  text_.innerText=info;
  for(let i = 0; i < options.length; i++){
    option_ = document.createElement('button')
    if(options[i].secondary){
        option_.className = "secondary";
    }
    option_.innerText = options[i].text
    option_.onclick = options[i].callback
    options_.appendChild(option_)
  }

  content_.appendChild(head_)
  content_.appendChild(text_)
  content_.appendChild(options_)
  card.appendChild(icon_)
  card.appendChild(content_)

};

function fireNotification({title, text, options, actions}){
  let notification_ = document.createElement('div')
  let content_ = document.createElement('div')
  let title_ = document.createElement('h1')
  let info_ = document.createElement('p')
  let actions_ = document.createElement('div')
  let options_ = document.createElement('div')

  content_.className='content'
  notification_.className='notification'
  title_.className='title'
  info_.className='info'
  actions_.className='actions'
  options_.className='options'


  title_.innerText=title
  info_.innerText=text
  
  for(let i = 0; i < actions.length; i++){
    let action = document.createElement('button')
    action.onclick=actions[i].callback
    action.innerText=actions[i].text
    actions_.appendChild(action)
  }

  for(let i = 0; i < options.length; i++){
    let option = document.createElement('button')
    option.onclick=options[i].callback
    option.innerText=options[i].text
    options_.appendChild(option)
  }

   content_.appendChild(title_)
   content_.appendChild(info_)
   content_.appendChild(actions_)

   notification_.appendChild(content_)
   notification_.appendChild(options_)
   notifications.appendChild(notification_)
   setTimeout(()=>{
    notification_.remove()
   }, 5000)
}