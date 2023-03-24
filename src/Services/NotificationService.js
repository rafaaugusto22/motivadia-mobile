import {
  Platform
} from "react-native";
import {useState } from 'react';
import MensagensFetchService from "./MensagensFetchService"
import PushNotificationIOS from "@react-native-community/push-notification-ios";
var PushNotification = require("react-native-push-notification");
import {MensagemRandom} from '../Api/mensagemRandom'

import BackgroundFetch from 'react-native-background-fetch';
import AsyncStorage from "@react-native-community/async-storage";


export default class NotificationService {
  

    static  agendaMensagem =  ()=>{
      if(Platform.OS==='android'){
        console.log("android")
          BackgroundFetch.configure(
            {
              minimumFetchInterval: 60, // fetch interval in minutes
            },
            async taskId => {
              console.log('Received background-fetch event: ', taskId);
  
              // 3. Insert code you want to run in the background, for example:
              await MensagemRandom();
              const res = await MensagensFetchService.lerMensagemDia();
  
              let today = new Date(Date.now());
              let hour = today.getHours();
            
  
              if (res.data.length > 0 && hour>=7 && hour<8 && AsyncStorage.getItem("mensagem_dia"))   {
                // 4. Send a push notification
                
                
                  PushNotification.localNotification({
                    //... You can use all the options from localNotifications
                    message:res.data[0].mensagem, // (required)
                  });
              }
            
              
              // Call finish upon completion of the background task
              BackgroundFetch.finish(taskId);
            },
            error => {
              console.error('RNBackgroundFetch failed to start.');
            },
          );
        }else if(Platform.OS==='ios' && AsyncStorage.getItem("mensagem_dia")){
          console.log("IOS")
          this.notificationIOS()
        }
    }

    static notificationIOS (){
      let today = new Date(Date.now());
          today.setHours(7)
          today.setMinutes(0)
  
          PushNotification.cancelAllLocalNotifications()
          PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            title: 'MotivaDia',
            message:  'Sua nova mensagem do dia chegou!', // (required)
            date: today, // in 60 secs
            repeatType: 'day'
          });
    }
  }