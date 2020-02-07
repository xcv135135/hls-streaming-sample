var shell = require('shelljs');

var video_filename = 'input';
var convert = function (input_filename) {
	shell.exec('ffmpeg -i input.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls videoinput/output.m3u8');
}

convert(video_filename);
