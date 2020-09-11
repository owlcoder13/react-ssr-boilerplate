let compileAll = () => {
    let promises = [];

    compilers.forEach(compiler => {
        promises.push(new Promise((resolve, reject) => {
            compiler.run(function (err, stats) {
                if (err || stats.hasErrors()) {
                    console.log(stats.compilation.errors);
                } else {
                    console.log('compiled')
                }
            });
        }));
    })

    return Promise.all(promises);
}