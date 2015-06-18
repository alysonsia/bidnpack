package com.gojiberrytech.bidnpack.placegallery2;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import com.gojiberrytech.bidnpack.R;

import fr.cobaltians.cobalt.Cobalt;
import fr.cobaltians.cobalt.activities.CobaltActivity;
import fr.cobaltians.cobalt.fragments.CobaltFragment;

public class PlaceGallery2Activity extends CobaltActivity
{
    /*@Override
    protected CobaltFragment getFragment() {
        return new MainFragment();
    }*/

    @Override
    protected CobaltFragment getFragment() {
        return Cobalt.getInstance(this).getFragmentForController(PlaceGallery2Fragment.class, "default", "placegallery2/PlaceGalleryUI2.html");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // setContentView(R.layout.activity_place);
        Cobalt.DEBUG = true;
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

}
