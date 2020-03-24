var nama = 'Lianda'
var peran = 'penyihir zero'
if (nama=== '' || peran=== '') {
  console.log('Nama hatus diisi');
} else 
if (nama=== 'Lianda' && peran=== 'ksatria'){
  console.log('Selamat datang di Dunia Proxytia,', nama)
  console.log('Halo', peran, nama, 'kamu dapat menyerang dengan senjatamu!')
} else
if (nama=== 'Lianda' && peran=== 'tabib'){
  console.log('Selamat datang di Dunia Proxytia,', nama)
  console.log('Halo', peran, nama, 'kamu dapat membatu temanmu yang terluka.')
} else
if (nama=== 'Lianda' && peran=== 'penyihir zero'){
  console.log('Selamat datang di Dunia Proxytia, Zero')
  console.log('Halo', peran, 'ciptakan keajaiban yang membantu kemenanganmu!')
} else {
  console.log('Pilih peranmu untuk mulai game')
}