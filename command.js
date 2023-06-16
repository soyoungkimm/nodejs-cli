const fs = require('fs');
const { program } = require('commander');

program.version('1.0.0');

program
  .command('create <filename>')
  .description('파일 생성')
  .action((filename) => {
    fs.writeFileSync(filename, '');
    console.log('파일이 성공적으로 생성되었습니다.');
  });

program
  .command('copy <source> <destination>')
  .description('파일 복사')
  .action((source, destination) => {
    fs.copyFileSync(source, destination);
    console.log('파일이 성공적으로 복사되었습니다.');
  });

program
  .command('delete <filename>')
  .description('파일 삭제')
  .action((filename) => {
    fs.unlinkSync(filename);
    console.log('파일이 성공적으로 삭제되었습니다.');
  });

program.parse(process.argv);