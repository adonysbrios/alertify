# Alertify

Alertify is a javascript library to show alerts and notifications,

## Screenshots
![Screenshot from 2025-01-27 08-57-30](https://github.com/user-attachments/assets/58de8dc0-c9c6-4616-be11-5408d239d169)
![Screenshot from 2025-01-27 08-57-26](https://github.com/user-attachments/assets/1b820f43-017d-4723-bb29-ce4eed0afd28)
![Screenshot from 2025-01-27 08-57-12](https://github.com/user-attachments/assets/e51e9e84-5282-4f22-b157-b31d3bdf5b57)
![Screenshot from 2025-01-27 08-57-09](https://github.com/user-attachments/assets/a1c8d215-c332-4186-8556-605b0908253a)


## Example
Example in 'examples' folder

## How to use?
- Import alertify.js to your html
- Import alertify.css to your html
- Copy and paste this in your html
```
    <div  id="alertify"> 
	    <div  class="alertify-card">
	    </div>
    </div>
    <div  id="alertify-notification">
```
- Display a alert using fireAlert()

```
<button  onclick="fireAlert({title:'Accepted', info:'You\'re accepted in this platform', options: [{text:'Redirect to google', callback: ()=>{window.location.href='https:/\/google.com'}},{ text: 'Close', secondary:  true, callback:  closeAlert }] })">Show alert</button>
```
- Display a notification using fireNotification()

```
<button  onclick="fireNotification({title:'Succesfully upload!', text: 'The file is ready to use', options: [{text:'View file', callback: ()=>alert('hello')}], actions: [{text:'Google', callback: ()=>window.location.href=('https:/\/google.com')}] })"> Show notification </button>
```
