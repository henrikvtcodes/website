
// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
	interface AmpImg {
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		layout?: string;
	}
	interface IntrinsicElements {
		'amp-img': AmpImg;
	}
}