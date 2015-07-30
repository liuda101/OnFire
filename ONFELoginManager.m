//
//  ONFELoginManager.m
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "ONFELoginManager.h"
#import "RCTConvert.h"


@interface ONFELoginManager ()

@property (nonatomic, strong) RCTResponseSenderBlock callback;

@end

@implementation ONFELoginManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(show:(RCTResponseSenderBlock)callback)
{
  
  self.callback = callback;
  
  LoginViewController *loginVC = [[LoginViewController alloc] initWithNibName:@"LoginViewController" bundle:[NSBundle mainBundle]];
  loginVC.delegate = self;
  
  UINavigationController *loginNavVC = [[UINavigationController alloc] initWithRootViewController:loginVC];
  loginNavVC.navigationBar.translucent = NO;
  loginNavVC.navigationBar.barTintColor = [UIColor colorWithRed:0.0 green:0.3765 blue:0.6275 alpha:0.9];
  loginNavVC.navigationBar.tintColor = [UIColor whiteColor];
  loginNavVC.navigationBar.barStyle = UIBarStyleBlack;
  
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
    
    [root presentViewController:loginNavVC animated:YES completion:nil];
  });
}

- (void)loginCancel {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
    
    [root dismissViewControllerAnimated:YES completion:nil];
  });
  
  self.callback(@[@"cancel"]);
}

- (void) loginSuccess {
  
}

@end
