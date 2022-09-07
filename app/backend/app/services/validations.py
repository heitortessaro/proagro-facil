import geopy.distance

# returns true if no register for the same date has different event in a radius of 10km
def validate_new_register(register, registers_same_date):
    area_limit = 10
    for existing_register in registers_same_date:
        distance = calc_distance(register, existing_register)
        print(distance)
        if not check_veracity(area_limit, distance, register, existing_register):
            return False
    return True


def calc_distance(new_register, existing_register):
    coord_new_register = (new_register["latitude"], new_register["longitude"])
    existing_coord = (existing_register["latitude"], existing_register["longitude"])
    return geopy.distance.geodesic(coord_new_register, existing_coord).km


# returns false if the register may present inconsistency
def check_veracity(area_limit, distance, new_register, existing_register):
    if distance <= area_limit:
        new_event_type = new_register["type"]
        existing_event_type = existing_register["type"]
        if new_event_type == existing_event_type:
            return False
    return True
