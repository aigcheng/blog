## 元字符

元字符是正则表达式的基本组成元素。元字符在这里跟它通常表达的意思不一样，而是以某种特殊的含义去解释。有些元字符在写在方括号内时有特殊含义。
元字符如下：

| 元字符 | 描述                                                                                                  |
| :----: | ----------------------------------------------------------------------------------------------------- |
|   .    | 匹配除换行符以外的任意字符。                                                                          |
|  [ ]   | 字符类，匹配方括号中包含的任意字符。                                                                  |
|  [^ ]  | 否定字符类。匹配方括号中不包含的任意字符                                                              |
|   \*   | 匹配前面的子表达式零次或多次                                                                          |
|   +    | 匹配前面的子表达式一次或多次                                                                          |
|   ?    | 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。                                                |
| {n,m}  | 花括号，匹配前面字符至少 n 次，但是不超过 m 次。                                                      |
| (xyz)  | 字符组，按照确切的顺序匹配字符 xyz。                                                                  |
| &#124; | 分支结构，匹配符号之前的字符或后面的字符。                                                            |
| &#92;  | 转义符，它可以还原元字符原来的含义，允许你匹配保留字符 <code>[ ] ( ) { } . \* + ? ^ $ \ &#124;</code> |
|   ^    | 匹配行的开始                                                                                          |
|   $    | 匹配行的结束                                                                                          |

### 教程

[30 分钟入门教程，网上流传甚广][1]
[55 分钟教程【英文][2]】，
[一本简单的书，每一节就是一块内容][3]
[正则匹配原理解析][4]
[正则标签，标签下有值得点击的链接，一些典型的问题][5]
[正则学习测试于一身][6]
[MDN 出品，JavaScript 方面内容][7]

### 验证与测试

[in JavaScript, Python, PCRE 16-bit, generates explanation of pattern][8]
[正则验证测试，清晰明了][9]
[中文版正则验证测试][10]
[测试工具][11]

### 闯关模式实践

[闯关模式练习正则表达式，完成一个个正则匹配的测验][12]
[通过实际练习掌握正则表达式][13]
[正则挑战，有不同难度，很丰富][14]
[正则挑战，完成正则匹配要求][15]

[1]: http://deerchao.net/tutorials/regex/regex.htm
[2]: https://qntm.org/files/re/re.html
[3]: http://regex.learncodethehardway.org/book/
[4]: https://swtch.com/~rsc/regexp/regexp1.html
[5]: http://stackoverflow.com/tags/regex/info%20stackoverflow
[6]: http://regexr.com/
[7]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
[8]: https://regex101.com/
[9]: https://www.debuggex.com/
[10]: https://mengzhuo.org/regex/
[11]: http://refiddle.com/
[12]: http://regex.alf.nu
[13]: http://regexone.com/
[14]: https://regexcrossword.com/
[15]: http://callumacrae.github.io/regex-tuesday/
