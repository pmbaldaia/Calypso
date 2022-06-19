const testing = require('./functions'); 

test('test link', () => {
    expect(testing.checkLink('https://www.bing.com/images/search?view=detailV2&ccid=boU0VLtf&id=DA5DC2607F214820073FEA997F67AC029444D900&thid=OIP.boU0VLtfyLfKIbp_1YIWJgHaFj&mediaurl=https%3a%2f%2fwww.asicentral.com%2fmedia%2f20479%2fscottcolumnfig4-800.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6e853454bb5fc8b7ca21ba7fd5821626%3frik%3dANlElAKsZ3%252bZ6g%26pid%3dImgRaw%26r%3d0&exph=600&expw=800&q=image&simid=608007257387786325&FORM=IRPRST&ck=1F36D1C75E6E031CFEC0E4EBCC064548&selectedIndex=1&adlt=strict'))
    .toBeTruthy();
});

test('Invalid link', () => {
	expect(() => testing.checkLink('www.bing.com/images/search?view=detailV2&ccid=boU0VLtf&id=DA5DC2607F214820073FEA997F67AC029444D900&thid=OIP.boU0VLtfyLfKIbp_1YIWJgHaFj&mediaurl=https%3a%2f%2fwww.asicentral.com%2fmedia%2f20479%2fscottcolumnfig4-800.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6e853454bb5fc8b7ca21ba7fd5821626%3frik%3dANlElAKsZ3%252bZ6g%26pid%3dImgRaw%26r%3d0&exph=600&expw=800&q=image&simid=608007257387786325&FORM=IRPRST&ck=1F36D1C75E6E031CFEC0E4EBCC064548&selectedIndex=1&adlt=strict'))
    .toThrowError('invalid link');
});


test('test rating', () => {
    expect(testing.rating(1)).toBeTruthy();
});

test('test rating', () => {
    expect(() => testing.rating('asf')).toThrowError('invalid rating');
});

test('test rating', () => {
    expect(() => testing.rating(-1)).toThrowError('invalid rating');
});
