var yuhuiyolanda = {
    compact: function(ary) {
      return ary.filter(it => it)
    },
    //keypoint for chunk: 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
    chunk: function(arr, size = 1) {
      var ans = []       
    for(var i = 0;i < arr.length;i+=size){
     var item = arr.slice(i,i + size)
     ans.push(item)
     }
     return ans     
    },
    difference: function(arr,...values){
      var toExclude = [].concat(...values)
      return arr.filter(item => !toExclude.includes(item)) 
    },
   //keypoint for drop: 如果 begin 大于原数组的长度，则会返回空数组。
    drop: function(arr,n = 1){
      return arr.slice(n)
    },
    dropright:  function(arr,n){
      if(n >= arr.length){
        return []
      }else{
        return arr.slice(0,arr.length - n)
      }
    },
    fill: function(array,value,start = 0,end = array.length){
      for(var i = start;i < end;i++){
        array[i] = value 
      }
      return array        
    },
 
    flatten: function(array){
       return [].concat(...array)
    },

    flattenDeep: function(array){
      var result = []
        for(var item of array){
          if(Array.isArray(item)){
              result.push(...flattenDeep(item))
          }else{
            result.push(item)
          }
        }
        return result 
    },

    flattenDepth:function(array,depth = 1){
      var result = []
      for(var item of array){
        if(Array.isArray(item)){
          var flattedItem = flattenDepth(item, depth - 1)
          result.push(...flattedItem)
        }else{
          result.push(item)
        }
      }
      return result 
    },
    head:function(array){
        return array[0]
      },
    indexOf:function(array,value,fromIndex = 0){
        for(i = fromIndex;i < array.length;i++){
          if(array[i] === value){
            return i  
          }
        }
        return -1
    },
    initial:function(array){
      array.pop()
      return array 
    },
    intersection:function(...arys){
      for(var i = 1;i < arguments.length;i++){
       arguments[0] = arguments[0].filter(it => arguments[i].includes(it))
      }
      return arguments[0]       
    },
    last:function(array){
      return array[array.length - 1]
    },
   concat: function(array,...value){
     var result = []
     for(var item of arguments){
       if(Array.isArray(item)){
         result.push(...item)
       }else{
         result.push(item)
       }
     }
     return result 
    },
    identity: function(value){
      return value 
    },
    isArray: function(value){
      return Object.prototype.toString.call(value) === "[Object Array]"
    },
    isArguments: function(value){
      return Object.prototype.toString.call(value) === "[Object Arguments]"
    },
    isBoolean: function(value){
      return Object.prototype.toString.call(value) === "[Object Boolean]"
    },
    isDate: function(value){
      return Object.prototype.toString.call(value) === "[Object Date]"
    },
    isFunction: function(value){
      return Object.prototype.toString.call(value) === "[Object Function]"
    },
    isObject:function(value){
      return value instanceof Object 
    },
    isRegExp:function(value){
      return Object.prototype.toString.call(value) === "[Object RegExp]"
    },
    isString: function(value){
      return  typeof value === 'string'
    },
    isUndefined: function(value){
      return  typeof value === 'undefined'
    },
    fromPairs:function(array){
      var result = {}
      for(var item of array){
        result[item[0]] = item[1]
      }
      return result 
    },
    reverse:function(array){
      var res = []
      for(var i = array.length - 1;i >= 0;i--){
        res.push(array[i])
      }
      return res 
    },
    negate:function(f){
      return function(...args){
        return !f(...args)
      }
    },
    join:function(array,str){
      var res = ''
      for(var i = 0;i < array.length - 1;i++){
         res = res + array[i] + str 
      }
      return res + array[i]
   },
   without:function(array,...values){
     var res = array.slice()
     for(var i = 1;i < arguments.length;i++){
      res = res.filter(it => it != arguments[i])
     }
     return res
   },
   pull:function(array,...values){
     var toExclude = []
     toExclude.push(...values)
     return array.filter(it => !toExclude.includes(it)) 
   },
   sortedIndex:function(array,value){
     for(var i = 0;i < array.length;i++){
       if(value == array[i]){
         return i 
       }
       if(array[i + 1] > value && array[i] < value){
         return i + 1
       }
     }
   },

   union:function(array,...values){
     var arr = array.concat(...values)
     var map = {}
     return arr.filter(it => {
       if(it in map){
         return false 
       }else{
         map[it] = 1
         return true 
       }
     }
    )
   },
   xor:function(array,...values){
    var arr = array.concat(...values)
    var map = {}
    for(var i = 0;i < arr.length;i++){
      if(arr[i] in map){
        map[arr[i]]++
      }else{
        map[arr[i]] = 1
      }
    }
    return arr.filter(it => map[it] == 1)
   },
   range:function(start = 0,end,step = 1){
     var res = []
     for(var i = start;i < end;i+=step){
       res.push(i)
     }
     return res 
   },
   omit:function(object,path){
     var res = {}
     for(var key in object){
       if(!path.includes(key)){
         res[key] = object[key]
       }
     }
     return res 
   },
   invert:function(object){
     var res = {}
     for(var key in object){
       res[object[key]] = key 
     }
     return res 
   },
   max:function(array){
     return array == []?undefined:array.reduce(function(a,b){
       if(a > b) {return a}else{return b}
     },-Infinity)
   },
   min:function(array){
    return array == []?undefined:array.reduce(function(a,b){
      if(a > b) {return b}else{return a}
    },Infinity)
  },
  
  ceil:function(number,precision = 0){
     return Math.ceil(number * 10 ** precision) /10 ** precision
  },
  

toArray:function(value){
var result = []
if(typeof value === 'string'){
  for(var i = 0;i < value.length;i++){
    result.push(value[i])
  }
}else if(typeof value === 'object'){
  for(var key in value){
    result.push(value[key])
  }
}
return result 
},
escape: function(str){
  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }
  var res = ''
  for(var i = 0;i < str.length;i++){
    if(str[i] in map){
      res += map[str[i]]
    }else{
      res += str[i]
    }
  }
  return res 
},
repeat:function(str = '',n = 1){
  var res = ''
  for(var i = 0;i < n;i++){
    res += str 
  }
  return res 
},
flip:function(f){
  return function(...args){
    return f(...args.reverse())
  }
},
It:function(value,other){
   return value < other 
},
Ite:function(value,other){
  return value <= other 
},

pad:function(string, length = 0, chars = ' '){
   var left = ((length - string.length) / chars.length) | 0
   for(var i = 0;i < left;i++){
     string = chars + string 
   } 
   while(string.length < length){
     string += chars 
   }
   string = string.slice(0,length)
   return string 
},
padEnd:function(string, length = 0, chars = ' '){
  while(string.length < length){
    string += chars 
  }
  string = string.slice(0,length)
  return string 
},
padStart:function(string, length = 0, chars = ' '){
  while(string.length < length){
    string = chars + string 
  }
  string = string.slice(string.length - length)
  return string 
}, 
spread:function(func, start = 0){
  return function(ary){
    return func(ary.apply(null,ary))
  }
},
//注意输出的是自己的而非原型的,可枚举的属性名
//使用for-in循环,遍历的是可枚举的属性名,不论是原型里的还是自身实例中
//使用Object.hasOwnProperty(),检测该属性存在于原型中,还是实例中
//以上两个结合,就能够筛选出来符合以下要求的属性
//Creates an array of the own enumerable property names of object.
// 输入：keys({"a":1,"b":2})
// 输出/期望：["a","b"]
// 输入：keys("hi")
// 输出/期望：["0","1"]

keys:function(object){
  var res = []
  for(var key in object){
    if(object.hasOwnProperty(key)){
      res.push(key)
    }
  }
  return res 
},

pick:function(object, paths) {
  var res = {}
  for(var key in object){
    if(paths.includes(key)){
       res[key] = object[key]
    }
  }
  return res 
},
add:function(augend, addend){
  return augend + addend
},
isError:function(value){
  return value instanceof Error 
},
defaults:function(object,...args){
  for(var arg of args){
    //遍历参数 for-of 
    for(var key in arg){
      if(!(key in object)){
        object[key] = arg[key]
      }
    }
  }
  return object
},

  };
   


