let temp = {}
module.exports.Client = class {
set(id, key, data) {
  this.id = id
  this.key = key
  this.data = data
}
save() {
temp[this.id][this.key] = this.data
  this = {}
}
get(id, key) {
if(!key == undefined){
return temp[id][key]
}else {
return temp[id]
}
}
delete(id, key) {
if(key == undefined){
delete temp[id]
}else {
delete temp[id][key]
}
}
}
