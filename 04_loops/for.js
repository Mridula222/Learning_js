const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObj){
    // console.log(myObj[key]);
}

const programm = ["java", "c", "cpp", "rb", "js"]
for(const key in programm){
    // console.log(programm[key]);  // in for-in loop it gives indices if key is written
}

const map = new Map()
map.set('IN',"india")
map.set('usa',"united states of america")
map.set('fr',"france")

for(const key in map){
    console.log(map[key]);  //not iterable
}

