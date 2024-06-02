import logging
import psycopg2
from instnt.common.db import getAuditDBConnection
from datetime import datetime


def update_model_usage_data(uuid, models):
    """
    This function updates the usage of models in DB
    
    Parameters
    -------
    uuid : uuid of the transaction you want to update
    models : list of models to be updated
    """

    query = f"""UPDATE fraud_predict SET used_in_decisioning = TRUE 
            WHERE uuid = %(uuid)s 
            AND model_name in {tuple(models)}"""
    
    try:
        # DB call
        with getAuditDBConnection() as connection:
            with connection.cursor() as cursor:
                cursor.execute(query, {'uuid': uuid})
            connection.commit()
    except Exception as e:
        logging.error(f'Exception occurred in updating the model usage:: {e}',
                    stack_info=True,
                    exc_info=True)