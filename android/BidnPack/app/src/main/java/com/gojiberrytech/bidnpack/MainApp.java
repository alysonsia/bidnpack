package com.gojiberrytech.bidnpack;

import android.app.Application;

import fr.cobaltians.cobalt.Cobalt;

/**
 * Created by SiaJa on 6/16/2015.
 */
public class MainApp extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        Cobalt.DEBUG = true;
        Cobalt.getInstance(this).setResourcePath("www/");
    }
}
