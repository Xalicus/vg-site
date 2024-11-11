 function gaming() {
	 alert("Thanks for showing your support for gaming!")
 }
 
 
 let btnOpen = document.querySelector('.btnURL')
 let input = document.querySelector('.btnURLText')
 
 btnOpen.addEventListener('click', () => {
	 window.open(input.value, '_blank');
 });
