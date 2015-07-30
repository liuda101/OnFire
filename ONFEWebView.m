//
//  ONFEWebView.m
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "ONFEWebView.h"

#import <UIKit/UIKit.h>
#import "RCTAutoInsetsProtocol.h"
#import "RCTEventDispatcher.h"
#import "UIView+React.h"
#import "RCTUtils.h"
#import "RCTView.h"

@interface ONFEWebView () <UIWebViewDelegate, RCTAutoInsetsProtocol>

@end

@implementation ONFEWebView
{
  RCTEventDispatcher *_eventDispatcher;
  UIWebView *_webView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super initWithFrame:CGRectZero])) {
    _eventDispatcher = eventDispatcher;
    _contentInset = UIEdgeInsetsZero;
    _automaticallyAdjustContentInsets = YES;
    _webView = [[UIWebView alloc] initWithFrame:self.bounds];
    _webView.delegate = self;
    [self addSubview:_webView];
  }
  
  return self;
}

RCT_NOT_IMPLEMENTED(-initWithFrame:(CGRect)frame)
RCT_NOT_IMPLEMENTED(-initWithCoder:(NSCoder *)aDecoder)


- (NSURL *)URL
{
  return _webView.request.URL;
}

- (void)setURL:(NSURL *)URL
{
  [_webView loadRequest:[NSURLRequest requestWithURL:URL]];
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  _webView.frame = self.bounds;
  
  [RCTView autoAdjustInsetsForView:self withScrollView:_webView.scrollView updateOffset:YES];
}

- (void)setContentInset:(UIEdgeInsets)contentInset
{
  _contentInset = contentInset;
  [RCTView autoAdjustInsetsForView:self
                    withScrollView:_webView.scrollView
                      updateOffset:NO];
}

#pragma mark - UIWebViewDelegate methods

- (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
  if ([request.URL.scheme isEqualToString:@"onfe-js"]) {
    NSDictionary *event = @{
                            @"target": self.reactTag,
                            @"message": [request.URL.absoluteString substringFromIndex:10]
                            };
    [_eventDispatcher sendInputEventWithName:@"messageFromWeb" body:event];
  }
  return ![request.URL.scheme isEqualToString:@"onfe-js"];
}

@end
