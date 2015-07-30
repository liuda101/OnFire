//
//  LoginViewController.h
//  OnFire
//
//  Created by LiuQifeng on 15/7/30.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol LoginViewControllerDelegate <NSObject>

- (void)loginCancel;
- (void)loginSuccess;

@end

@interface LoginViewController : UIViewController

@property (nonatomic, retain) id<LoginViewControllerDelegate> delegate;

@end
