package com.diro.ift2255.model;

import java.util.List;

public class EligibilityResult {
    public boolean eligible;
    public List<String> missing;

    public EligibilityResult(boolean eligible, List<String> missing) {
        this.eligible = eligible;
        this.missing = missing;
    }
}


