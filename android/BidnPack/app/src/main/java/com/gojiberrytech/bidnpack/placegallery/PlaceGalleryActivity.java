package com.gojiberrytech.bidnpack.placegallery;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import fr.cobaltians.cobalt.Cobalt;
import fr.cobaltians.cobalt.activities.CobaltActivity;
import fr.cobaltians.cobalt.fragments.CobaltFragment;
import com.gojiberrytech.bidnpack.R;
import com.gojiberrytech.bidnpack.placegallery2.PlaceGallery2Activity;

public class PlaceGalleryActivity extends CobaltActivity
{
    /*@Override
    protected CobaltFragment getFragment() {
        return new MainFragment();
    }*/

    @Override
    protected CobaltFragment getFragment() {
        return Cobalt.getInstance(this).getFragmentForController(PlaceGalleryFragment.class, "default", "placegallery/PlaceGalleryUI.html");
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
        if (id == R.id.bidnow_settings) {
            Intent intent = new Intent(this, PlaceGallery2Activity.class);
            //EditText editText = (EditText) findViewById(R.id.edit_message);
            //String message = editText.getText().toString();
            //intent.putExtra(EXTRA_MESSAGE, message);
            startActivity(intent);
            return true;
        }
        if (id == R.id.owner_settings) {
            Intent intent = new Intent(this, PlaceGallery2Activity.class);
            startActivity(intent);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

}
