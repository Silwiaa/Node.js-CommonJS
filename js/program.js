var os = require('os');
// SET ENCODING UTF-8
process.stdin.setEncoding('utf-8');


process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !==null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                // OPERATING AND VERSION SYSTEM
                var type =.os.type(),
                    realse = os.relase();
                
                if(type==='Darwin') {
                    type = 'OSX';
                } else if (type==='Windows_NT') {
                    type='Windows';
                }
                console.log('System:', type);
                console.log('Relase:', relase);
                
                // PROCESSOR MODEL
                var cpu = os.cpus()[0].model;
                console.log('CPU model:',cpu);
                
                //UPTIME
                var uptime = os.uptime();
                console.log('Uptime: ~', (uptime/60).toFixed(0),'min');
                
                //USERINFO
                var userInfo = os.userInfo();
                console.log('User name:', userInfo.username);
                
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
    console.log(process.versions); 
});