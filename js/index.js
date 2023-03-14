let dropDownItem = document.querySelectorAll('.dropdown-item')
console.log(dropDownItem)
dropDownItem.forEach(item => {
item.addEventListener('click', function(){
	this.closest('.numberDropdown').children[0].innerText = this.innerText
})
})