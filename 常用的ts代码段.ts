// 数组里面的相同key提取出来转成对象
let temp1= {};
let data1:any = [];
data1.forEach(item=>{
if (!temp1[item.deliveryAddress.uid]) {
  temp1[item.deliveryAddress.uid] = {};
  temp1[item.deliveryAddress.uid].name = item.deliveryAddress.vAddresses;
  temp1[item.deliveryAddress.uid].data = [];
}
  temp1[item.deliveryAddress.uid].data.push(item);
})
let temp1_1 = Object.keys(temp1)
let temp1_2 = Object.values(temp1)