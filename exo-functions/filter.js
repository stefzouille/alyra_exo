const filter = (tab) => {
  
  return tab.filter((item, index) => tab.indexOf(item) === index)

}



console.log(filter(1, 2, 3, 4))