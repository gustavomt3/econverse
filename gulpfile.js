const gulp = require('gulp');
const through2 = require('through2');

//Verifica todos arquivos com final .scss na pasta Components e adiciona o import de mixin se o mesmo não tiver
function addMixin() {
  return gulp
    .src('./src/Components/**/*.scss')
    .pipe(
      through2.obj(function (file, _, cb) {
        const contents = file.contents.toString();
        if (!contents.includes("@import '../../GlobalStyles/vars-mixins';")) {
          file.contents = Buffer.concat([
            Buffer.from("@import '../../GlobalStyles/vars-mixins';\n\n"),
            file.contents,
          ]);
        }
        cb(null, file);
      }),
    )
    .pipe(gulp.dest('./src/Components/'));
}
exports.sass = addMixin;

//Tarefa padrão do Gulp.
exports.default = gulp.parallel(addMixin);
