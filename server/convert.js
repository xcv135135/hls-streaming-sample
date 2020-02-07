var shell = require('shelljs');

var video_filename = 'input';
var convert = function (input_filename) {
	let command = 'ffmpeg -i ' + video_filename + '.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls video' + video_filename + '/output.m3u8';
	shell.exec(command);
}

convert(video_filename);
