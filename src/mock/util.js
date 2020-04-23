import Mock from 'mockjs'

Mock._creArr = (min, max, obj) => {
    let arr = []
    for (let index = 0; index < Mock.Random.integer(min, max); index++) arr.push(obj())
    return arr;
}