package com.gojiberrytech.bidnpack.placegallery;

import fr.cobaltians.cobalt.fragments.CobaltFragment;
import org.json.JSONObject;


/**
 * Created by SiaJa on 6/16/2015.
 */
public class PlaceGalleryFragment extends CobaltFragment {
    @Override
    protected boolean onUnhandledCallback(String callback, JSONObject data) {
        return false;
    }

    @Override
    protected boolean onUnhandledEvent(String event, JSONObject data, String callback) {
     //   if (super.onUnhandledEvent(event, data, callback)) return true;
       // else
       return false;
    }

    @Override
    protected void onUnhandledMessage(JSONObject message) { }
}
