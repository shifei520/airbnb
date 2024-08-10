index length arr allArr
1、length <= 7
2、length > 7
index < 3:
for (let i = 0; i < index; i++) {
arr.push(allArr[i])
}
for (let i = index; i < index + 7 - arr.length; i++) {
arr.push(allArr[i])
}
