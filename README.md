English | [简体中文](https://github.com/yunying1/jokerTree)

<div align="center"> 
<h1>jokerTree</h1>
<p>json to view and virtualDom added</p>
<!-- 
[![GitHub stars](https://img.shields.io/github/stars/y1ndan/jokerTree?style=flat-square)](https://github.com/y1ndan/jokerTree/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/y1ndan/jokerTree?style=flat-square)](https://github.com/y1ndan/jokerTree/network)
[![GitHub issues](https://img.shields.io/github/issues/y1ndan/jokerTree?style=flat-square)](https://github.com/y1ndan/jokerTree/issues)
[![Docker stars](https://img.shields.io/docker/stars/yindan/jokerTree?style=flat-square)](https://registry.hub.docker.com/r/yindan/jokerTree)
![Docker pulls](https://img.shields.io/docker/pulls/yindan/jokerTree?style=flat-square)
[![PyPI version](https://img.shields.io/pypi/v/jokerTree?style=flat-square)](https://pypi.org/project/jokerTree/#history)
[![PyPI downloads](https://img.shields.io/pypi/dm/jokerTree?style=flat-square)](https://pypi.org/project/jokerTree)
[![QQ Group](https://img.shields.io/badge/chat-130516740-0d86d7?style=flat-square)](https://qm.qq.com/cgi-bin/qm/qr?k=_M9lYFxkYD7yQQR2btyG3pkZWFys_I-l)
[![Discord](https://img.shields.io/badge/chat-discord-0d86d7?style=flat-square)](https://discord.gg/p28845gGfv)
[![Telegram](https://img.shields.io/badge/chat-telegram-0d86d7?style=flat-square)](https://t.me/jokerTree) -->

```

    🤡🤡🤡                          🤡      🤡                                                          
        🤡          🤡🤡🤡         🤡     🤡             🤡🤡🤡🤡       🤡         🤡                
        🤡        🤡       🤡       🤡   🤡            🤡          🤡      🤡     🤡                  
        🤡       🤡         🤡      🤡  🤡           🤡             🤡      🤡   🤡                   
        🤡       🤡         🤡      🤡🤡             🤡            🤡       🤡  🤡                    
        🤡       🤡         🤡      🤡  🤡           🤡   🤡🤡🤡🤡         🤡🤡                      
        🤡        🤡       🤡       🤡    🤡          🤡                     🤡                🤡🤡🤡 
  🤡   🤡           🤡🤡🤡         🤡      🤡         🤡                    🤡                   🤡   
     🤡                              🤡        🤡         🤡🤡🤡🤡🤡        🤡                   🤡   

```

</div>
`If this project is helpful to you, please give us a 🤡Star thanks!`

## Installation
```
$ npm install
```

## Start
```
$ npm run start
```


## Object -> AST

```
let obj1 = {
    a: "1",
    b: 2,
    c: {
        d: [
            true,
        ]
    }
};

let ast1 = {
    type: "object",
    key: "",
    path: "",
    dataValue: '{"a":"1","b":2,"c":{"d":[true]}}',
    value: [
        {
            type: "string",
            key: "a",
            path: '["a"]',
            dataValue: "1",
            value: "1",
        },
        {
            type: "number",
            key: "b",
            path: '["b"]',
            dataValue: "2",
            value: 2,
        },
        {
            type: "object",
            key: "c",
            path: '["c"]',
            dataValue: '{"d":[true]}',
            value: [
                {
                    type: "array",
                    key: "d",
                    path: '["c"]["d"]',
                    dataValue: "[true]",
                    value: [
                        {
                            type: "boolean",
                            key: 0,
                            path: '["c"]["d"][0]',
                            dataValue: "true",
                            value: true,
                        },
                    ],
                },
            ],
        },
    ],
}
```