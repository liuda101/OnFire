//
//  ONFEWebViewManager.m
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "ONFEWebViewManager.h"
#import "ONFEWebView.h"
#import "RCTBridge.h"

#import <UIKit/UIKit.h>

@implementation ONFEWebViewManager

RCT_EXPORT_MODULE()

RCT_REMAP_VIEW_PROPERTY(url, URL, NSURL);
RCT_EXPORT_VIEW_PROPERTY(contentInset, UIEdgeInsets);
RCT_EXPORT_VIEW_PROPERTY(automaticallyAdjustContentInsets, BOOL);
RCT_EXPORT_VIEW_PROPERTY(backgroundColor, UIColor);

- (UIView *)view
{
  ONFEWebView *webView = [[ONFEWebView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
  
  return webView;
}

- (NSDictionary *)customDirectEventTypes
{
  return @{
           @"messageFromWeb": @{
             @"registrationName": @"onMessageFromWeb"
           }
           };
}

@end
