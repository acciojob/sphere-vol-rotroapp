function volume_sphere() {
    
    let rad = document.querySelector('#radius').value;
	let vol = document.querySelector('#volume');
     const cal = rad*rad*rad;
	 vol.value = cal;
	event.preventDefault();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
